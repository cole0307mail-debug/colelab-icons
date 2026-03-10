// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ThunderstormOutlinedSvg from '@colelab/icons-svg/es/asn/ThunderstormOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ThunderstormOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ThunderstormOutlinedSvg }, slots);
  },
});
