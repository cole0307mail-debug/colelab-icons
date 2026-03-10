// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CardReaderOutlinedSvg from '@colelab/icons-svg/es/asn/CardReaderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CardReaderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CardReaderOutlinedSvg }, slots);
  },
});
