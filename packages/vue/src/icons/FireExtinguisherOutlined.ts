// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireExtinguisherOutlinedSvg from '@colelab/icons-svg/es/asn/FireExtinguisherOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireExtinguisherOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireExtinguisherOutlinedSvg }, slots);
  },
});
