// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WindDirectionOutlinedSvg from '@colelab/icons-svg/es/asn/WindDirectionOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WindDirectionOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WindDirectionOutlinedSvg }, slots);
  },
});
